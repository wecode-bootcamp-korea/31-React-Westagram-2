import './ReplyJihyeon.scss';
import MainJihyeon from '../MainJihyeon';

// {props.replyData}

const ReplyJihyeon = props => {
  return (
    <div className="replyJihyeon">
      <ul className="replyTextField">
        {props.replyData.map(input => {
          return <li>{input}</li>;
        })}
      </ul>
    </div>
  );
};

export default ReplyJihyeon;
