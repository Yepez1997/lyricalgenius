export const createLink = (link) => (
  $.ajax({
    method: 'POST',
    url: `/api/links`,
    data: {link}
  })
);
