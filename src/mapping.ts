import {
  Deposited
} from "../generated/Pool/Pool"
import {
  Event
} from "../generated/schema"

export function handleDeposited(event: Deposited): void {
  let entity = new Event(event.transaction.hash.toHex())
  entity.id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()

  entity.contractAddress = event.address
  // entity.blockHash = event.transaction.blockHash
  // entity.blockNumber = event.transaction.blockNumber
  // entity.transactionHash = event.transaction.transactionHash

  entity.eventType = "Deposited"
  entity.value = event.params.sender.toHex() + "," + event.params.amount.toHex()

  entity.save()
}

