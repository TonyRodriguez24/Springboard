$('.delete-todo').click(deleteTodo)

axios.delete()

async function deleteTodo(){
  const id = $(this).data('id')
  await axios.delete(`/api/todos/${id}`)
  $(this).parent().remove()
  }
