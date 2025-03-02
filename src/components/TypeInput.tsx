import React from 'react';

interface TypeInputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  disabled: boolean;
}

const TypeInput: React.FC<TypeInputProps> = ({ value, onChange, onKeyDown, disabled }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        disabled={disabled}
        className={`
          w-full px-4 py-3 text-2xl border-2 rounded-lg focus:outline-none
          ${disabled ? 'bg-gray-100 border-gray-300' : 'border-blue-400 focus:border-blue-600'}
          transition-all duration-200
        `}
        placeholder={disabled ? '' : 'Type here and press Enter...'}
        autoFocus
      />
      <p className="text-sm text-gray-600 mt-2">
        Press Enter after typing the word correctly
      </p>
    </div>
  );
};

export default TypeInput;
