export interface MediatorNode {
  guid: string;
  channel: string;
  onMessageReceived(payload: string): void;
}
