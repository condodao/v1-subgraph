import {
  ApartAdded as ApartAddedEvent,
  CondoAdded as CondoAddedEvent,
  CondoUpdated as CondoUpdatedEvent,
  RatingAdded as RatingAddedEvent,
  RatingUpdated as RatingUpdatedEvent,
  RentAdded as RentAddedEvent,
  RentUpdated as RentUpdatedEvent,
  ShareAdded as ShareAddedEvent,
  ShareUpdated as ShareUpdatedEvent,
  UserAdded as UserAddedEvent,
  UserUpdated as UserUpdatedEvent
} from "../generated/CondoManager/CondoManager"
import {
  ApartAdded,
  CondoAdded,
  CondoUpdated,
  RatingAdded,
  RatingUpdated,
  RentAdded,
  RentUpdated,
  ShareAdded,
  ShareUpdated,
  UserAdded,
  UserUpdated
} from "../generated/schema"

export function handleApartAdded(event: ApartAddedEvent): void {
  let entity = new ApartAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.apartId = event.params.apartId
  entity.buyerId = event.params.buyerId
  entity.condoId = event.params.condoId
  entity.tokenId = event.params.tokenId
  entity.floorNumber = event.params.floorNumber
  entity.apartmentNumber = event.params.apartmentNumber
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCondoAdded(event: CondoAddedEvent): void {
  let entity = new CondoAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.condoId = event.params.condoId
  entity.creatorId = event.params.creatorId
  entity.tokenAddress = event.params.tokenAddress
  entity.timelock = event.params.timelock
  entity.governor = event.params.governor
  entity.vault = event.params.vault

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCondoUpdated(event: CondoUpdatedEvent): void {
  let entity = new CondoUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.condoId = event.params.condoId
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRatingAdded(event: RatingAddedEvent): void {
  let entity = new RatingAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.ratingId = event.params.ratingId
  entity.ratedUserId = event.params.ratedUserId
  entity.raterUserId = event.params.raterUserId
  entity.isPositive = event.params.isPositive
  entity.comment = event.params.comment

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRatingUpdated(event: RatingUpdatedEvent): void {
  let entity = new RatingUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.ratingId = event.params.ratingId
  entity.isPositive = event.params.isPositive
  entity.comment = event.params.comment

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRentAdded(event: RentAddedEvent): void {
  let entity = new RentAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.rentId = event.params.rentId
  entity.shareId = event.params.shareId
  entity.renterId = event.params.renterId
  entity.balance = event.params.balance

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRentUpdated(event: RentUpdatedEvent): void {
  let entity = new RentUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.rentId = event.params.rentId
  entity.balance = event.params.balance

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleShareAdded(event: ShareAddedEvent): void {
  let entity = new ShareAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.shareId = event.params.shareId
  entity.tokenId = event.params.tokenId
  entity.renterId = event.params.renterId
  entity.pricePerBlock = event.params.pricePerBlock

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleShareUpdated(event: ShareUpdatedEvent): void {
  let entity = new ShareUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.shareId = event.params.shareId
  entity.pricePerBlock = event.params.pricePerBlock
  entity.isActive = event.params.isActive

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUserAdded(event: UserAddedEvent): void {
  let entity = new UserAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userId = event.params.userId
  entity.wallet = event.params.wallet
  entity.name = event.params.name
  entity.description = event.params.description
  entity.image = event.params.image

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUserUpdated(event: UserUpdatedEvent): void {
  let entity = new UserUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userId = event.params.userId
  entity.name = event.params.name
  entity.description = event.params.description
  entity.image = event.params.image

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
