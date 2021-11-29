const categories = document.querySelectorAll('.item ');
console.log(`Number of categories: ${categories.length}`);

document.querySelectorAll('.item h2').forEach(num =>
  console.log(`Category: ${num.textContent} 
  Elements: ${num.nextElementSibling.children.length}`));