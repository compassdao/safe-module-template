

export function generateUniqueId(): string {
  const getId = () => {
    const ts = new Date().getTime().toString();
    const parts = ts.split('').reverse();
    let id = '';

    for (let i = 0; i < 3; i++) {
      const index = Math.floor(Math.random() * parts.length);
      id += parts[index];
    }
    return id;
  }
  
  const getRandomStr = () => Math.random().toString(36).substring(2);

  return `${getId()}${getId()}${getRandomStr()}${getRandomStr()}`;

}