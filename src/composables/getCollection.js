import { ref, watchEffect } from 'vue';
import { projectFirestore } from '../firebase/config';

const getCollection = (_collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore
    .collection(_collection)
    .orderBy('createdAt');

  const unsubscribe = collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = 'No data found';
    }
  );

  watchEffect((onInvalidate) => {
    // unsubscribe from prev collection when watcher is stopped (component unmounted)
    onInvalidate(() => unsubscribe());
  });

  return { documents, error };
};

export default getCollection;
