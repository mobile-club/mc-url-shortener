import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, waitFor } from '@testing-library/react';
import App from './App';
import { GetMessagesDocument } from './graphql/message.generated';

test('should display messages', async () => {
  const messageStub = 'MobileClub!';
  const messagesMock = {
    request: {
      query: GetMessagesDocument,
    },
    result: {
      data: { messages: [{ id: 1, message: messageStub }] },
    },
  };

  const { getByText } = render(
    <MockedProvider mocks={[messagesMock]} addTypename={false}>
      <App />
    </MockedProvider>,
  );

  await waitFor(() => {
    expect(getByText(messageStub)).toBeInTheDocument();
  });
});
