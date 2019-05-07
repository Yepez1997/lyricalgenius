export const createAnnotation = () => (
    $.ajax({
    method: 'POST',
    url: `/api/annotations`
  })
);

export const fetchAnnotation = (id) => (
    $.ajax({
    method: 'GET',
    url: `/api/annotation/${id}`
  })
);

export const fetchAnnotations = () => (
    $.ajax({
    method: 'GET',
    url: `/api/annotations`
  })
);