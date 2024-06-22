import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
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
} from "../generated/CondoManager/CondoManager"

export function createApartAddedEvent(
  apartId: BigInt,
  buyerId: BigInt,
  condoId: BigInt,
  tokenId: BigInt,
  floorNumber: BigInt,
  apartmentNumber: BigInt,
  price: BigInt
): ApartAdded {
  let apartAddedEvent = changetype<ApartAdded>(newMockEvent())

  apartAddedEvent.parameters = new Array()

  apartAddedEvent.parameters.push(
    new ethereum.EventParam(
      "apartId",
      ethereum.Value.fromUnsignedBigInt(apartId)
    )
  )
  apartAddedEvent.parameters.push(
    new ethereum.EventParam(
      "buyerId",
      ethereum.Value.fromUnsignedBigInt(buyerId)
    )
  )
  apartAddedEvent.parameters.push(
    new ethereum.EventParam(
      "condoId",
      ethereum.Value.fromUnsignedBigInt(condoId)
    )
  )
  apartAddedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  apartAddedEvent.parameters.push(
    new ethereum.EventParam(
      "floorNumber",
      ethereum.Value.fromUnsignedBigInt(floorNumber)
    )
  )
  apartAddedEvent.parameters.push(
    new ethereum.EventParam(
      "apartmentNumber",
      ethereum.Value.fromUnsignedBigInt(apartmentNumber)
    )
  )
  apartAddedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return apartAddedEvent
}

export function createCondoAddedEvent(
  condoId: BigInt,
  creatorId: BigInt,
  tokenAddress: Address,
  timelock: Address,
  governor: Address,
  vault: Address
): CondoAdded {
  let condoAddedEvent = changetype<CondoAdded>(newMockEvent())

  condoAddedEvent.parameters = new Array()

  condoAddedEvent.parameters.push(
    new ethereum.EventParam(
      "condoId",
      ethereum.Value.fromUnsignedBigInt(condoId)
    )
  )
  condoAddedEvent.parameters.push(
    new ethereum.EventParam(
      "creatorId",
      ethereum.Value.fromUnsignedBigInt(creatorId)
    )
  )
  condoAddedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  condoAddedEvent.parameters.push(
    new ethereum.EventParam("timelock", ethereum.Value.fromAddress(timelock))
  )
  condoAddedEvent.parameters.push(
    new ethereum.EventParam("governor", ethereum.Value.fromAddress(governor))
  )
  condoAddedEvent.parameters.push(
    new ethereum.EventParam("vault", ethereum.Value.fromAddress(vault))
  )

  return condoAddedEvent
}

export function createCondoUpdatedEvent(
  condoId: BigInt,
  status: i32
): CondoUpdated {
  let condoUpdatedEvent = changetype<CondoUpdated>(newMockEvent())

  condoUpdatedEvent.parameters = new Array()

  condoUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "condoId",
      ethereum.Value.fromUnsignedBigInt(condoId)
    )
  )
  condoUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )

  return condoUpdatedEvent
}

export function createRatingAddedEvent(
  ratingId: BigInt,
  ratedUserId: BigInt,
  raterUserId: BigInt,
  isPositive: boolean,
  comment: string
): RatingAdded {
  let ratingAddedEvent = changetype<RatingAdded>(newMockEvent())

  ratingAddedEvent.parameters = new Array()

  ratingAddedEvent.parameters.push(
    new ethereum.EventParam(
      "ratingId",
      ethereum.Value.fromUnsignedBigInt(ratingId)
    )
  )
  ratingAddedEvent.parameters.push(
    new ethereum.EventParam(
      "ratedUserId",
      ethereum.Value.fromUnsignedBigInt(ratedUserId)
    )
  )
  ratingAddedEvent.parameters.push(
    new ethereum.EventParam(
      "raterUserId",
      ethereum.Value.fromUnsignedBigInt(raterUserId)
    )
  )
  ratingAddedEvent.parameters.push(
    new ethereum.EventParam(
      "isPositive",
      ethereum.Value.fromBoolean(isPositive)
    )
  )
  ratingAddedEvent.parameters.push(
    new ethereum.EventParam("comment", ethereum.Value.fromString(comment))
  )

  return ratingAddedEvent
}

export function createRatingUpdatedEvent(
  ratingId: BigInt,
  isPositive: boolean,
  comment: string
): RatingUpdated {
  let ratingUpdatedEvent = changetype<RatingUpdated>(newMockEvent())

  ratingUpdatedEvent.parameters = new Array()

  ratingUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "ratingId",
      ethereum.Value.fromUnsignedBigInt(ratingId)
    )
  )
  ratingUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "isPositive",
      ethereum.Value.fromBoolean(isPositive)
    )
  )
  ratingUpdatedEvent.parameters.push(
    new ethereum.EventParam("comment", ethereum.Value.fromString(comment))
  )

  return ratingUpdatedEvent
}

export function createRentAddedEvent(
  rentId: BigInt,
  shareId: BigInt,
  renterId: BigInt,
  balance: BigInt
): RentAdded {
  let rentAddedEvent = changetype<RentAdded>(newMockEvent())

  rentAddedEvent.parameters = new Array()

  rentAddedEvent.parameters.push(
    new ethereum.EventParam("rentId", ethereum.Value.fromUnsignedBigInt(rentId))
  )
  rentAddedEvent.parameters.push(
    new ethereum.EventParam(
      "shareId",
      ethereum.Value.fromUnsignedBigInt(shareId)
    )
  )
  rentAddedEvent.parameters.push(
    new ethereum.EventParam(
      "renterId",
      ethereum.Value.fromUnsignedBigInt(renterId)
    )
  )
  rentAddedEvent.parameters.push(
    new ethereum.EventParam(
      "balance",
      ethereum.Value.fromUnsignedBigInt(balance)
    )
  )

  return rentAddedEvent
}

export function createRentUpdatedEvent(
  rentId: BigInt,
  balance: BigInt
): RentUpdated {
  let rentUpdatedEvent = changetype<RentUpdated>(newMockEvent())

  rentUpdatedEvent.parameters = new Array()

  rentUpdatedEvent.parameters.push(
    new ethereum.EventParam("rentId", ethereum.Value.fromUnsignedBigInt(rentId))
  )
  rentUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "balance",
      ethereum.Value.fromUnsignedBigInt(balance)
    )
  )

  return rentUpdatedEvent
}

export function createShareAddedEvent(
  shareId: BigInt,
  tokenId: BigInt,
  renterId: BigInt,
  pricePerBlock: BigInt
): ShareAdded {
  let shareAddedEvent = changetype<ShareAdded>(newMockEvent())

  shareAddedEvent.parameters = new Array()

  shareAddedEvent.parameters.push(
    new ethereum.EventParam(
      "shareId",
      ethereum.Value.fromUnsignedBigInt(shareId)
    )
  )
  shareAddedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  shareAddedEvent.parameters.push(
    new ethereum.EventParam(
      "renterId",
      ethereum.Value.fromUnsignedBigInt(renterId)
    )
  )
  shareAddedEvent.parameters.push(
    new ethereum.EventParam(
      "pricePerBlock",
      ethereum.Value.fromUnsignedBigInt(pricePerBlock)
    )
  )

  return shareAddedEvent
}

export function createShareUpdatedEvent(
  shareId: BigInt,
  pricePerBlock: BigInt,
  isActive: boolean
): ShareUpdated {
  let shareUpdatedEvent = changetype<ShareUpdated>(newMockEvent())

  shareUpdatedEvent.parameters = new Array()

  shareUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "shareId",
      ethereum.Value.fromUnsignedBigInt(shareId)
    )
  )
  shareUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "pricePerBlock",
      ethereum.Value.fromUnsignedBigInt(pricePerBlock)
    )
  )
  shareUpdatedEvent.parameters.push(
    new ethereum.EventParam("isActive", ethereum.Value.fromBoolean(isActive))
  )

  return shareUpdatedEvent
}

export function createUserAddedEvent(
  userId: BigInt,
  wallet: Address,
  name: string,
  description: string,
  image: string
): UserAdded {
  let userAddedEvent = changetype<UserAdded>(newMockEvent())

  userAddedEvent.parameters = new Array()

  userAddedEvent.parameters.push(
    new ethereum.EventParam("userId", ethereum.Value.fromUnsignedBigInt(userId))
  )
  userAddedEvent.parameters.push(
    new ethereum.EventParam("wallet", ethereum.Value.fromAddress(wallet))
  )
  userAddedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  userAddedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  userAddedEvent.parameters.push(
    new ethereum.EventParam("image", ethereum.Value.fromString(image))
  )

  return userAddedEvent
}

export function createUserUpdatedEvent(
  userId: BigInt,
  name: string,
  description: string,
  image: string
): UserUpdated {
  let userUpdatedEvent = changetype<UserUpdated>(newMockEvent())

  userUpdatedEvent.parameters = new Array()

  userUpdatedEvent.parameters.push(
    new ethereum.EventParam("userId", ethereum.Value.fromUnsignedBigInt(userId))
  )
  userUpdatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  userUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  userUpdatedEvent.parameters.push(
    new ethereum.EventParam("image", ethereum.Value.fromString(image))
  )

  return userUpdatedEvent
}
