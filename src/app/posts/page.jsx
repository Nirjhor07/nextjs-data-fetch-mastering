//step: 2 --> another way of data fetching
// const posts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return await res.json();
// };

// step:3 ---> another way of data fetching
// const post = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");

//     // Check if response is OK
//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }

//     return res.json();
//   } catch (err) {
//     console.log("failed to load ", err);
//     throw err; // Re-throw to handle in component
//   }
// };

//step:1 -->  one way of data fetching
const PostPage = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await res.json();
  // console.log(data);

  // ***** step:2 diye data fetch korle etake abr receive korte hoy eibabe
  // const post = await posts();
  // console.log(post);

  // step:3 of data fetching
  // const data = await post();

  // step : 4 of data fetching method
  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("failed to load ");
    } else {
      return await res.json();
    }
  };
  const fetchPost = await fetchPosts();

  return (
    <div>
      {/* <p>Posts: {data.length}</p> */}
      <p>Posts: {fetchPost.length}</p>
      {/* <h1>This my code </h1> */}
    </div>
  );
};

export default PostPage;
