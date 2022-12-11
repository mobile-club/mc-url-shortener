import React, {
  FormEvent, useCallback, useMemo, useState,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.svg';
import { useCreateShortcutMutation } from './graphql/shortcut.generated';

type Shortcut = {
  path: string;
  target: string;
}
type TimeoutId = ReturnType<typeof setTimeout>;

// TODO Environment variables
const BASE_URL = 'http://localhost:4000';

function isValidUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (_) {
    return false;
  }
}

function App() {
  const [target, setTarget] = useState('https://www.google.com');
  const [shortcut, setShortcut] = useState<Shortcut | null>(null);
  const [createShortcut] = useCreateShortcutMutation();
  const [copied, setCopied] = useState(false);
  const [copiedTimeout, setCopiedTimeout] = useState<TimeoutId | null>(null);

  const isTargetValidUrl = useMemo(() => isValidUrl(target), [target]);

  const shortenLink = useMemo(() => shortcut && `${BASE_URL}/r/${shortcut.path}`, [shortcut]);

  const copyEnded = useCallback(() => {
    setCopied(false);
    setCopiedTimeout(null);
    if (copiedTimeout) {
      clearTimeout(copiedTimeout);
    }
  }, [copiedTimeout, setCopied, setCopiedTimeout]);

  const changeInputValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTarget(e.target.value);
  }, [setTarget]);

  const registerTarget = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (target) {
      const response = await createShortcut({ variables: { target } });
      setTarget('');
      setShortcut(response.data?.createShortcut as Shortcut);
      copyEnded();
    }
  }, [target, setTarget, createShortcut, setShortcut, copyEnded]);

  const copyShortenLink = useCallback(() => {
    if (shortenLink) {
      navigator.clipboard.writeText(shortenLink);
      setCopied(true);
      setCopiedTimeout(setTimeout(copyEnded, 2500));
    }
  }, [shortenLink, copyEnded]);

  return (
    <div className="bg-main-blue min-h-screen">
      <header className="container mx-auto py-14 flex justify-between">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-white font-bold text-2xl">
          URL shortener
        </h1>
      </header>
      <section className="container mx-auto py-8">
        <div
          data-cy="messageContainer"
          className="p-8 flex flex-col gap-6 items-center bg-white rounded-2xl"
        >
          <div className="font-semibold text-xl">
            Enter url to shorten
          </div>
          <div className="font-semibold">
            <form className="flex gap-4" onSubmit={registerTarget}>
              <input
                data-cy="messageInput"
                placeholder="Your message"
                className="p-3 w-96 border-2 rounded-full border-main-blue"
                value={target}
                onChange={changeInputValue}
              />
              <button
                data-cy="submit"
                type="submit"
                className="p-3 bg-main-blue text-white rounded-full"
                disabled={!isTargetValidUrl}
              >
                Shorten
              </button>
            </form>
          </div>
        </div>
      </section>
      {shortcut && shortenLink && (
        <section className="container mx-auto py-8">
          <div
            data-cy="messageContainer"
            className="p-8 flex flex-col gap-6 items-center bg-white rounded-2xl"
          >
            <div className="font-semibold text-xl">
              Your shortened url
            </div>
            <div className="font-semibold font-size-6">
              <a href={shortenLink} target="_blank" rel="noreferrer">{shortenLink}</a>
              <button className="ml-2" type="button" onClick={copyShortenLink} aria-label="Copy">
                <FontAwesomeIcon style={{ color: copied ? 'green' : 'black' }} icon={copied ? faClipboardCheck : faClipboard} />
              </button>
            </div>
            <div className="">
              <span className="mr-1">target:</span>
              <span>{shortcut.target}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
