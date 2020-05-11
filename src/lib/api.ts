import { UserInput } from '@codement/api';
import axios from 'axios';

export abstract class API {

  static url = 'http://localhost:4000/graphql';

  static async signup(user: UserInput) {
    const res = await axios.post(this.url, {
      variables: { user },
      query: `mutation ($user: UserInput!) {
          createUser(user:$user) {
            id
            firstName
            lastName
          }
        }`
    });
    return res.data;

  }
}
