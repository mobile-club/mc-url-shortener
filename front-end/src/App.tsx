import React, { FormEvent, useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import logo from './logo.svg';

function App() {
  const [shortenUrl, {
    error, data,
  }] = useLazyQuery(gql`
    query ShortenUrl($url: String!) { 
      shortenUrl(url: $url) { shortenedUrl } 
    }
  `);
  const [url, setUrl] = useState({ value: '' });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl({ value: e.target.value });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (url.value) {
      await shortenUrl({ variables: { url: url.value } });
    }
  };

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
          {error && (
          <p>
            {error.message}
            <br />
            (Example of valid URL : https://developer.mozilla.org/en-US/docs/Web/API/URL/URL)
          </p>
          )}

          {data && (
          <p>
            Shortened URL :
            <br />
            <a href={`localhost:4000/${data.shortenUrl.shortenedUrl}`}>
              localhost:4000/
              {data?.shortenUrl.shortenedUrl}
            </a>
          </p>
          )}

          <div className="font-semibold">
            <form
              className="flex gap-4"
              onSubmit={onSubmit}
            >

              <input
                placeholder="Your URL"
                className="p-3 w-96 border-2 rounded-full border-main-blue"
                value={url.value}
                onChange={onChange}
              />

              <button
                data-cy="submit"
                type="submit"
                className="p-3 bg-main-blue text-white rounded-full"
              >
                Shorten URL
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
