import EditForm from '@/components/EditForm'

const getTopicById = async(id:string) => {
  const res = await fetch(`http://localhost:3000/api/topics/${id}`,{cache: 'no-store'})
  if (!res.ok){
    throw new Error("Failed to get topic")
  }

   return res.json()
}

const EditTopic = async({params}: any) => {
  const {id} = params
  const {topic} = await getTopicById(id)
  const {title,description} = topic
  return (
    <>
      <EditForm id={id} title={title} description={description}/>
    </>
  )
}

export default EditTopic