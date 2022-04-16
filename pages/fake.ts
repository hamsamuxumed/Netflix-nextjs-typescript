// export const getServerSideProps = async () => {
//     const products = await getProducts(payments, {
//       includePrices: true,
//       activeOnly: true,
//     })
//       .then((res) => res)
//       .catch((error) => console.log(error.message))

//     const [
//       netflixOriginals,
//       trendingNow,
//       topRated,
//       actionMovies,
//       comedyMovies,
//       horrorMovies,
//       romanceMovies,
//       documentaries,
//     ] = await Promise.all([
//       fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
//       fetch(requests.fetchTrending).then((res) => res.json()),
//       fetch(requests.fetchTopRated).then((res) => res.json()),
//       fetch(requests.fetchActionMovies).then((res) => res.json()),
//       fetch(requests.fetchComedyMovies).then((res) => res.json()),
//       fetch(requests.fetchHorrorMovies).then((res) => res.json()),
//       fetch(requests.fetchRomanceMovies).then((res) => res.json()),
//       fetch(requests.fetchDocumentaries).then((res) => res.json()),
//     ])

//     return {
//       props: {
//         netflixOriginals: netflixOriginals.results,
//         trendingNow: trendingNow.results,
//         topRated: topRated.results,
//         actionMovies: actionMovies.results,
//         comedyMovies: comedyMovies.results,
//         horrorMovies: horrorMovies.results,
//         romanceMovies: romanceMovies.results,
//         documentaries: documentaries.results,
//         products,
//       },
//     }
//   }
