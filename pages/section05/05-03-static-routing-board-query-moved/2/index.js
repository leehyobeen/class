import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 2) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARD);
  console.log(data);

  return (
    <>
      <div>2번 게시글 이동이 완료되었습니다!</div>
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용:{data ? data.fetchBoard.contents : "로딩중입니다"}</div>
    </>
  );
}
