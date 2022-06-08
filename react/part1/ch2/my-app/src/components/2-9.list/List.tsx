export function List(props: any) {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <ul>
      {numbers.map((item: number) => (
        <li key={item.toString()}>{item}</li>
      ))}
    </ul>
  );
}
function ListItem(props: any) {
  const value = props.value;
  return <li>{value}</li>;
}

export function NumberList(props: any) {
  const numbers = props.numbers;
  const listItems = numbers.map((number: number) => (
    // 틀렸습니다! 여기에 key를 지정해야 합니다.
    <ListItem value={number} />
  ));
  return <ul>{listItems}</ul>;
}

export function Blog(props: any) {
  const posts = [
    { id: 1, title: "Hello World", content: "Welcome to learning React!" },
    {
      id: 2,
      title: "Installation",
      content: "You can install React from npm.",
    },
  ];

  const sidebar = (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = posts.map((post: any) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}
