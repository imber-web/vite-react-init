import { Form } from 'react-router-dom'
interface Icontact {
  first: string
  last: string
  avatar: string
  notes: string
  favorite: boolean
}
export default function Contact() {
  const contact = {
    first: 'imber',
    last: 'ef',
    avatar: 'https://placekitten.com/g/200/200',
    notes: 'Some notes',
    favorite: true
  }
  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.avatar || undefined} />
      </div>
      <div>
        <h1>
          {contact.first} {contact.last}
          <Favorite contact={contact} />
        </h1>
        <p>{contact.notes}</p>
      </div>
    </div>
  )
}
function Favorite({ contact }: { contact: Icontact }) {
  const favorite = contact.favorite
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </Form>
  )
}
