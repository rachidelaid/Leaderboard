export default function renderList(list) {
  const container = document.querySelector('.list ul');
  container.innerHTML = '';

  if (!list.length) {
    container.innerHTML = '<li>NO SCORES YET</li>';
    return;
  }

  list.forEach((score, index) => {
    const li = document.createElement('li');
    li.textContent = `${score.user}: ${score.score}`;
    li.id = index;

    container.append(li);
  });
}
