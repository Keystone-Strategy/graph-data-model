import { IntegrationSchema } from "./index";

function getMockDataStoreEntity(_class: string | string[]) {
  return {
    _type: "some-type-of-thing",
    _class,
    _key: "some-key-unique",
    name: "Name of Thing",
    displayName: "Name of Thing",
    classification: "not an enum",
    encrypted: true,
  };
}

describe("GraphObject", () => {
  const entity = {
    _type: "some-type-of-thing",
    _class: ["GraphObject"],
    _key: "some-key-unique",
  };

  const validate = IntegrationSchema.getSchema("#GraphObject")!;

  test("validates complete entity", () => {
    expect(validate(entity)).toBe(true);
  });
});

describe("Entity", () => {
  const entity = {
    _type: "some-type-of-thing",
    _class: ["Entity"],
    _key: "some-key-unique",
    name: "Name of Thing",
    displayName: "Name of Thing",
  };

  const validate = IntegrationSchema.getSchema("#Entity")!;

  test("validates complete entity", () => {
    expect(validate(entity)).toBe(true);
  });
});

["DataStore", "Disk"].forEach((_class) => {
  describe(_class, () => {
    const validate = IntegrationSchema.getSchema(`#${_class}`)!;

    test("validates complete entity", () => {
      expect(validate(getMockDataStoreEntity(_class))).toBe(true);
    });

    test("classification diallows undefined value", () => {
      validate({
        ...getMockDataStoreEntity(_class),
        classification: undefined,
      });
      expect(validate.errors![0]).toMatchObject({
        message: expect.stringContaining("classification"),
      });
    });

    test("classification allows null value", () => {
      expect(
        validate({
          ...getMockDataStoreEntity(_class),
          classification: null,
        }),
      ).toBe(true);
    });

    test("encrypted disallows undefined value", () => {
      validate({
        ...getMockDataStoreEntity(_class),
        encrypted: undefined,
      });
      expect(validate.errors![0]).toMatchObject({
        message: expect.stringContaining("encrypted"),
      });
    });

    test("encrypted allows null value", () => {
      expect(
        validate({
          ...getMockDataStoreEntity(_class),
          encrypted: null,
        }),
      ).toBe(true);
    });
  });
});

describe("DataStore & Disk", () => {
  test("should validate entity that has both DataStore and Disk classes using DataStore schema", () => {
    const validate = IntegrationSchema.getSchema("#DataStore")!;
    expect(validate(getMockDataStoreEntity(["DataStore", "Disk"]))).toBe(true);
  });

  test("should validate entity that has both DataStore and Disk classes using Disk schema", () => {
    const validate = IntegrationSchema.getSchema("#Disk")!;
    expect(validate(getMockDataStoreEntity(["DataStore", "Disk"]))).toBe(true);
  });
});
