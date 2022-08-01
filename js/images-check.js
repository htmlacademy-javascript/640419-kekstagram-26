const imgUploadPreview = document.querySelector('.img-upload__preview img');
const uploadFile = document.querySelector('#upload-file');
const IMG_TYPE = ['jpg', 'jpeg', 'png', 'gif'];


imgUploadPreview.addEventListener('change', () => {
  const item = uploadFile.files[0];
  const itemName = item.name.toLowerCase();
  const itemCorrespond = IMG_TYPE.some((str) => itemName.endsWith(str));
  if (itemCorrespond) {
    imgUploadPreview.src = URL.createObjectURL(item);
  }
});
