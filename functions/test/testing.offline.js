/* eslint-env mocha */
const sinon = require("sinon");
const chai = require("chai");
const admin = require("firebase-admin");
const test = require("firebase-functions-test")();

const assert = chai.assert;

describe("Cloud Function", () => {
  let myFunctions, adminInitStub;

  before(() => {
    adminInitStub = sinon.stub(admin, "initializeApp");
    myFunctions = require("../lib/index");
  });

  after(() => {
    // Restore admin.initializeApp() to its origin method.
    adminInitStub.restore();
    test.cleanup();
  });

  describe("Delete Cabinet", () => {
    // Delete cabinet
    // myFunctions.deleteCabinetInGroup
    // delete document("groups/{groupID}/cabinet_ref/{cabinetID}")
    // context

    const groupID = "dummy_steamers";
    const cabinetID = "4p";

    const refPath = `group/${groupID}/cabinet_ref/${cabinetID}`;

    const snap = test.firestore.makeDocumentSnapshot({}, refPath);
   });

   describe("Create User", (done) => {
    /// Auth User Create Event
    /// Document creation check
    /// ?????
    const user = test.auth.makeUserRecord(test.auth.exampleUserRecord());

    // createUser
    // createUser use snap inside userRecord,
    // and document snap
    // const wrapped = test.wrap(myFunctions.createUser);

    // wrapped(user);

   })
});
