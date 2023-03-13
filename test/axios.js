axios.get('/books', {
  params: {
    search: 'Rails',
    sort_by: 'published_at DESC'
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.log(error);
});