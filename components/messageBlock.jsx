import {
  Media
} from 'react-bootstrap'


function MessageBlock(props) {
  console.log(props)
  const messages = props.messages.map((message) => {
    return (
      <Media className={`w-100 my-2 hover-item-${props.theme} px-1`}>
        <img
          width={48}
          height={48}
          className="mr-3"
          src={message.icon}
          alt={message.sender}
        />
        <Media.Body>
          <h5 className={`text-color-${props.theme}`}>{message.sender}</h5>
          <p className={`text-color-${props.theme}`}>
            {message.message}
          </p>
        </Media.Body>
      </Media>
    )
  })
  return (
    <div className='d-flex flex-column-reverse h-100'>
      {messages}
    </div>
  )
}

export default MessageBlock