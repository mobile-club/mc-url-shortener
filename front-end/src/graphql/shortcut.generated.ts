import * as Types from '../graphql.d';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ListShortcutsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ListShortcutsQuery = { __typename?: 'Query', shortcuts: Array<{ __typename?: 'ShortcutDto', path: string, target: string }> };

export type CreateShortcutMutationVariables = Types.Exact<{
  target: Types.Scalars['String'];
}>;


export type CreateShortcutMutation = { __typename?: 'Mutation', createShortcut: { __typename?: 'ShortcutDto', path: string, target: string } };


export const ListShortcutsDocument = gql`
    query listShortcuts {
  shortcuts {
    path
    target
  }
}
    `;
export function useListShortcutsQuery(baseOptions?: Apollo.QueryHookOptions<ListShortcutsQuery, ListShortcutsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListShortcutsQuery, ListShortcutsQueryVariables>(ListShortcutsDocument, options);
      }
export function useListShortcutsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListShortcutsQuery, ListShortcutsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListShortcutsQuery, ListShortcutsQueryVariables>(ListShortcutsDocument, options);
        }
export type ListShortcutsQueryHookResult = ReturnType<typeof useListShortcutsQuery>;
export type ListShortcutsLazyQueryHookResult = ReturnType<typeof useListShortcutsLazyQuery>;
export type ListShortcutsQueryResult = Apollo.QueryResult<ListShortcutsQuery, ListShortcutsQueryVariables>;
export const CreateShortcutDocument = gql`
    mutation createShortcut($target: String!) {
  createShortcut(target: $target) {
    path
    target
  }
}
    `;
export function useCreateShortcutMutation(baseOptions?: Apollo.MutationHookOptions<CreateShortcutMutation, CreateShortcutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateShortcutMutation, CreateShortcutMutationVariables>(CreateShortcutDocument, options);
      }
export type CreateShortcutMutationHookResult = ReturnType<typeof useCreateShortcutMutation>;
export type CreateShortcutMutationResult = Apollo.MutationResult<CreateShortcutMutation>;
export type CreateShortcutMutationOptions = Apollo.BaseMutationOptions<CreateShortcutMutation, CreateShortcutMutationVariables>;