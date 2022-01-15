export class YourDurableObject implements DurableObject {
  constructor(_: DurableObjectState) {}

  async fetch(_: Request) {
    return new Response('Hello from Your Durable Object!', { status: 200 });
  }
}
