import { createSignal } from 'solid-js';
import { Show, For } from 'solid-js';

function HtmlGenerator() {
  const [elementType, setElementType] = createSignal('div');
  const [attributes, setAttributes] = createSignal('');
  const [content, setContent] = createSignal('');
  const [generatedCode, setGeneratedCode] = createSignal('');
  const [copySuccess, setCopySuccess] = createSignal('');

  const elements = ['div', 'p', 'h1', 'h2', 'h3', 'span', 'a', 'ul', 'li', 'button', 'input', 'img'];

  const generateCode = () => {
    let attrString = attributes().trim();
    if (attrString) {
      attrString = ' ' + attrString;
    }

    let code;
    if (['img', 'input'].includes(elementType())) {
      code = `<${elementType()}${attrString} />`;
    } else {
      code = `<${elementType()}${attrString}>${content()}</${elementType()}>`;
    }

    setGeneratedCode(code);
    setCopySuccess('');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode());
      setCopySuccess('تم نسخ الكود إلى الحافظة!');
    } catch (err) {
      setCopySuccess('فشل النسخ!');
    }
  };

  return (
    <div class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md h-full">
      <h1 class="text-2xl font-bold mb-4 text-gray-800 text-center">مولد كود HTML</h1>

      <div class="mb-4">
        <label class="block text-gray-700 mb-2">اختر عنصر HTML:</label>
        <select
          class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent cursor-pointer"
          value={elementType()}
          onInput={(e) => setElementType(e.target.value)}
        >
          <For each={elements}>
            {(element) => (
              <option value={element}>{element}</option>
            )}
          </For>
        </select>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 mb-2">السمات (مثال: class="my-class" id="my-id"):</label>
        <input
          type="text"
          placeholder='مثال: class="my-class" id="my-id"'
          value={attributes()}
          onInput={(e) => setAttributes(e.target.value)}
          class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent box-border"
        />
      </div>

      <Show when={!['img', 'input'].includes(elementType())}>
        <div class="mb-4">
          <label class="block text-gray-700 mb-2">المحتوى:</label>
          <textarea
            placeholder="أدخل المحتوى داخل العنصر"
            value={content()}
            onInput={(e) => setContent(e.target.value)}
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent box-border"
            rows={4}
          ></textarea>
        </div>
      </Show>

      <button
        onClick={generateCode}
        class="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
      >
        توليد كود HTML
      </button>

      <Show when={generatedCode()}>
        <div class="mt-6">
          <h2 class="text-xl font-bold mb-2 text-gray-800">الكود المتولد:</h2>
          <pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>{generatedCode()}</code>
          </pre>
          <button
            onClick={copyToClipboard}
            class="mt-2 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          >
            نسخ إلى الحافظة
          </button>
          <Show when={copySuccess()}>
            <p class="text-green-600 mt-2">{copySuccess()}</p>
          </Show>
        </div>
      </Show>
    </div>
  );
}

export default HtmlGenerator;