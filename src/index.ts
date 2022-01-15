import { Env } from './env';

export default {
  async fetch(request: Request, env: Env, _: EventContext<Env, '', ''>) {
    const id = env.YourDurableObject.idFromName('yourDurableObjectInstance');
    const durableObject = env.YourDurableObject.get(id);
    return durableObject.fetch(request);
  },
};

export * from './yourDurableObject';
