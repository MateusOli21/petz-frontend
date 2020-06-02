import React, { useRef, useEffect, useState } from 'react';
import { useField } from '@unform/core';

import api from '../../services/api';

import { Container } from './styles';

export default function InputAvatar({ name, ...rest }) {
  const inputRef = useRef(null);
  const { registerField, defaultValue } = useField('avatar');

  useEffect(() => {
    registerField({
      name: 'avatar_id',
      ref: inputRef.current,
      path: 'dataset.file',
    });
  }, [registerField]);

  const [fileId, setFileId] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  async function handlePreview(e) {
    const data = new FormData();
    data.append('file', e.target.files?.[0]);

    const response = await api.post('files', data);
    const { id, url } = response.data;

    setFileId(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview || 'https://api.adorable.io/avatars/50/abott@adorable.png'
          }
          alt=""
        />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          ref={inputRef}
          data-file={fileId}
          onChange={handlePreview}
        />
      </label>
    </Container>
  );
}
