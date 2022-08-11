import { json, LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get('s');

  return json({
    title: search,
  });
};

export default function DegreeSearch() {
  return <>yeah</>;
}
