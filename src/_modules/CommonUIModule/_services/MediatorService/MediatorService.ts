import { Injectable } from '@angular/core';
import { MediatorMessage } from './MediatorMessage';
import { MediatorNode } from './MediatorNode';
@Injectable({
  providedIn: 'root',
})
export class MediatorService {
  nodes: MediatorNode[] = [];
  isDebugging: boolean = true;

  constructor() {
    this.log(() => console.log('📮 Started'));
  }

  public EnableDebugging(): string {
    this.isDebugging = true;
    return '📮 Debugging Enabled!';
  }

  private log(logFunc: () => void): void {
    if (this.isDebugging) logFunc();
  }

  public AddNode(newNode: MediatorNode): void {
    // Check if the node already exists.
    // If it does throw error.
    if (this.nodes.some((node) => node.guid === newNode.guid)) {
      return;
    }

    // Add node to Nodes
    this.nodes.push(newNode);

    this.log(() =>
      console.log(`📮 Node Added`, {
        channel: newNode.channel,
        guid: newNode.guid,
      })
    );
  }

  public RemoveNode(guid: string): void {
    // Find the node
    // If it doesn't exist, nothing to do.
    let nodeIndex = this.nodes.findIndex((node) => node.guid === guid);
    if (nodeIndex === -1) {
      return;
    }
    let channel = this.nodes[nodeIndex].channel;

    // Remove the node from the list.
    this.nodes.splice(nodeIndex, 1);

    this.log(() =>
      console.log(`📮 Node Removed`, {
        channel,
      })
    );
  }

  public SendMessage(message: MediatorMessage) {
    // Get the nodes that match this channel.
    let receiverNodes = this.nodes.filter(
      (node) => node.channel === message.channel
    );

    // For each Node that matches the channel,
    // Where it is a function
    // trigger their onMessageReceived.
    receiverNodes
      .filter(
        (receiverNode) => receiverNode.onMessageReceived instanceof Function
      )
      .forEach((receiverNode) =>
        receiverNode.onMessageReceived(message.payload)
      );

    this.log(() =>
      console.log(`📮 Message Sent`, {
        message,
        receivers: receiverNodes.map((n) => n.guid),
      })
    );
  }

  ngOnDestroy() {}
}
