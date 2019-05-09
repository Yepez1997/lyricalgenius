export const createLink = (link) => (
  $.ajax({
    method: 'POST',
    url: `/api/links`,
    data: {link}
  })
);


export const receiveLinks = (links) => (
  $.ajax({
    method: 'GET',
    url: '/api/links'
  })
);

