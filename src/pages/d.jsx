const [books, setBooks] = useState([]);
const [page, setPage] = useState(0);
const fetchDate = async () => {
  const params = {
    page: page,
  };
  const resultBest = await instance.get(requests.fetchBest, { params });
  setBooks(resultBest.data.list);
};
const pageNext = () => {
  setPage(page + 1);
};
const pagePrev = () => {
  setPage(page - 1);
};
const changePage = (_page) => {
  if (page !== _page) {
    setPage(_page);
    console.log("페이지바뀌어라", page);
  }
};
useEffect(() => {
  fetchDate();
}, [page]);
