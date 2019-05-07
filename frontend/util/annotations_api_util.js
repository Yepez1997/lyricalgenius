export const createAnnotation = (annotation) => (
    $.ajax({
    method: 'POST',
    url: `/api/annotations`,
    data: {annotation}
  })
);

export const fetchAnnotation = (id) => (
    $.ajax({
    method: 'GET',
    url: `/api/annotations/${id}`
  })
);

export const fetchAnnotations = () => (
    $.ajax({
    method: 'GET',
    url: `/api/annotations`
  })
);