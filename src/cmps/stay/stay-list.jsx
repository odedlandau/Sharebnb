import { StayPreview } from './stay-preview'


export function StayList({ stays }) {

  if (!stays) return
  return (
    <div className="stay-list">
      {stays.map((stay) => (
        <StayPreview key={stay._id} stay={stay} />
      ))}
    </div>
  )
}

