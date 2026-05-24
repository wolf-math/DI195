// Create an interface ExtendedMailable that extends Mailable and includes a new method schedule(email: string, delay: number): void.

interface Mailable {
  send(email: string): boolean;
  queue(email: string): boolean;
}

interface ExtendedMailable extends Mailable {
  schedule(email: string, delay: number): void;
}
