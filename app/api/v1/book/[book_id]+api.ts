export function GET(request: Request, { book_id }: { book_id: string }) {
  return Response.json({
    data: {
      id: "1",
      title: `Batman chapter ${book_id}`,
    },
  });
}
