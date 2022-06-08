export default function Extraction(props: any) {
  return (
    <Comment date={comment.date} text={comment.text} author={comment.author} />
  );
}

function Comment(props: any) {
  return (
    <div className="Comment">
      <UserInfo author={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "http://placekitten.com/g/64/64",
  },
};

function formatDate(date: any) {
  return date.toLocaleDateString();
}

function Avatar(props: any) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props: any) {
  return (
    <div className="UserInfo">
      <Avatar user={props.author} />
      <div className="UserInfo-name">{props.author.name}</div>
    </div>
  );
}
