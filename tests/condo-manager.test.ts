import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { ApartAdded } from "../generated/schema"
import { ApartAdded as ApartAddedEvent } from "../generated/CondoManager/CondoManager"
import { handleApartAdded } from "../src/condo-manager"
import { createApartAddedEvent } from "./condo-manager-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let apartId = BigInt.fromI32(234)
    let buyerId = BigInt.fromI32(234)
    let condoId = BigInt.fromI32(234)
    let tokenId = BigInt.fromI32(234)
    let floorNumber = BigInt.fromI32(234)
    let apartmentNumber = BigInt.fromI32(234)
    let price = BigInt.fromI32(234)
    let newApartAddedEvent = createApartAddedEvent(
      apartId,
      buyerId,
      condoId,
      tokenId,
      floorNumber,
      apartmentNumber,
      price
    )
    handleApartAdded(newApartAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ApartAdded created and stored", () => {
    assert.entityCount("ApartAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ApartAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "apartId",
      "234"
    )
    assert.fieldEquals(
      "ApartAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "buyerId",
      "234"
    )
    assert.fieldEquals(
      "ApartAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "condoId",
      "234"
    )
    assert.fieldEquals(
      "ApartAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenId",
      "234"
    )
    assert.fieldEquals(
      "ApartAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "floorNumber",
      "234"
    )
    assert.fieldEquals(
      "ApartAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "apartmentNumber",
      "234"
    )
    assert.fieldEquals(
      "ApartAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "price",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
