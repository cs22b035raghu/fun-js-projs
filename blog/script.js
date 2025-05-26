    const title = document.getElementById('title');
    const body1 = document.getElementById('body');
    const imgFile = document.getElementById('imgFile');
    const button = document.getElementById('addBtn');
    const r = document.getElementById('notesContainer');

    button.addEventListener('click', () => {
      const titleText = title.value.trim();
      const bodyText = body1.value.trim();
      const file = imgFile.files[0];

      if (!titleText || !bodyText) {
        alert('Please enter both title and body.');
        return;
      }

      const note = document.createElement('div');
      note.className = 'note';

      const addContent = (imgSrc = '') => {
        note.innerHTML = `
          <h2>${titleText}</h2>
          <p>${bodyText}</p>
          ${imgSrc ? `<img src="${imgSrc}" alt="${bodyText}" />` : ''}
        `;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => note.remove());
        note.appendChild(deleteBtn);

        r.appendChild(note);
      };

      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          addContent(e.target.result); // Base64 image string
        };
        reader.readAsDataURL(file);
      } else {
        addContent(); // No image
      }

      // Clear form
      title.value = '';
      body1.value = '';
      imgFile.value = '';
    });