import { fireStore } from "./firebase.config";

export const addTransactionToFirestore = async (transactionHash, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fireStore
        .collection("records")
        .doc(`${transactionHash}`)
        .set({
          ...data
        });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const getTransactionFromFirestore = async transactionHash => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fireStore
        .collection("records")
        .doc(`${transactionHash}`)
        .get();
      resolve(response.data());
    } catch (error) {
      reject(error);
    }
  });
};
