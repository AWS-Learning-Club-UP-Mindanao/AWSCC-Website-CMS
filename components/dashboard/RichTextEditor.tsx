'use client';
import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Heading from '@tiptap/extension-heading';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import Blockquote from '@tiptap/extension-blockquote';
import Image from '@tiptap/extension-image';
import InsertMediaModal from '@/components/dashboard/InsertMediaModal';

interface RichTextEditorProps {
  initialContent?: string;
  onChange?: (content: string) => void;
  onCharCountChange?: (count: number) => void;
}

export default function RichTextEditor({ initialContent = '', onChange, onCharCountChange }: RichTextEditorProps) {
  const [view, setView] = React.useState<'editor' | 'preview'>('editor');
  const [charCount, setCharCount] = React.useState(0);
  const [mediaModalOpen, setMediaModalOpen] = React.useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
        bulletList: false,
        orderedList: false,
        listItem: false,
        blockquote: false,
      }),
      Underline,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      BulletList,
      OrderedList,
      ListItem,
      Blockquote,
      Image,
    ],
    content: initialContent,
    onUpdate: ({ editor }) => {
      const count = editor.getText().length;
      setCharCount(count);
      onCharCountChange?.(count);
      onChange?.(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none min-h-[160px] p-4',
      },
    },
  });

  React.useEffect(() => {
    if (editor) {
      setCharCount(editor.getText().length);
      onCharCountChange?.(editor.getText().length);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor]);

  const handleMediaInsert = (url: string) => {
    if (editor) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-col gap-[12px]">
      <label className="font-medium text-[#1A1A1A] text-[20px] flex flex-row gap-[4px] items-center">
        Description <span className="bg-[#FCEFF1] text-[#E05A6F] px-2 py-0.5 rounded text-[12px]">(required)</span>
      </label>

      <div className="flex justify-center gap-[10px]">
        <div className="bg-[#d1d5db] p-1 rounded-full text-[#3B4951] flex items-center w-48">
          <button
            type="button"
            onClick={() => setView('editor')}
            className={`flex-1 py-1.5 px-4 rounded-full text-sm font-medium transition-colors ${
              view === 'editor' ? 'bg-[#A8D0E6] shadow-sm' : ''
            }`}
          >
            Editor
          </button>
          <button
            type="button"
            onClick={() => setView('preview')}
            className={`flex-1 py-1.5 px-4 rounded-full text-sm font-medium transition-colors ${
              view === 'preview' ? 'bg-[#A8D0E6] shadow-sm' : ''
            }`}
          >
            Preview
          </button>
        </div>
      </div>

      {view === 'editor' && (
        <>
          <div className="bg-[#A8D0E6] rounded-[8px] px-[8px] sm:px-[16px] py-[8px] relative">
            <div className="flex items-center overflow-x-auto scrollbar-hide toolbar-scroll">
              <div className="flex gap-[8px] sm:gap-[12px] min-w-max pr-4">
                <button
                  type="button"
                  onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                  className={`p-1 rounded transition-colors ${editor.isActive('heading', { level: 1 }) ? 'bg-[#7BA7CC]' : 'hover:bg-[#7BA7CC]/30'}`}
                >
                  <img src="/toolbar/heading-icon.svg" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" alt="Heading" />
                </button>

                <div className="flex gap-[4px] sm:gap-[8px]">
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={`p-1 rounded transition-colors ${editor.isActive('bold') ? 'bg-[#7BA7CC]' : 'hover:bg-[#7BA7CC]/30'}`}
                  >
                    <img src="/toolbar/bold-icon.svg" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" alt="Bold" />
                  </button>
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={`p-1 rounded transition-colors ${editor.isActive('italic') ? 'bg-[#7BA7CC]' : 'hover:bg-[#7BA7CC]/30'}`}
                  >
                    <img src="/toolbar/italic-icon.svg" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" alt="Italic" />
                  </button>
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className={`p-1 rounded transition-colors ${editor.isActive('underline') ? 'bg-[#7BA7CC]' : 'hover:bg-[#7BA7CC]/30'}`}
                  >
                    <img src="/toolbar/underline-icon.svg" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" alt="Underline" />
                  </button>
                </div>

                <div className="flex gap-[4px] sm:gap-[8px]">
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={`p-1 rounded transition-colors ${editor.isActive('bulletList') ? 'bg-[#7BA7CC]' : 'hover:bg-[#7BA7CC]/30'}`}
                  >
                    <img src="/toolbar/unordered-icon.svg" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" alt="Bullet List" />
                  </button>
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={`p-1 rounded transition-colors ${editor.isActive('orderedList') ? 'bg-[#7BA7CC]' : 'hover:bg-[#7BA7CC]/30'}`}
                  >
                    <img src="/toolbar/ordered-icon.svg" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" alt="Ordered List" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => editor.chain().focus().toggleBlockquote().run()}
                  className={`p-1 rounded transition-colors ${editor.isActive('blockquote') ? 'bg-[#7BA7CC]' : 'hover:bg-[#7BA7CC]/30'}`}
                >
                  <img src="/toolbar/comment-icon.svg" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" alt="Quote" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-[8px] sm:gap-[12px] mt-2 sm:mt-0 sm:absolute sm:right-4 sm:top-1/2 sm:-translate-y-1/2">
              <button
                type="button"
                onClick={() => setMediaModalOpen(true)}
                className="bg-[#EBF0FF] rounded px-2 sm:px-3 py-1 flex flex-row gap-1 sm:gap-2 items-center text-[12px] sm:text-[14px] text-[#1a1a1a]"
              >
                <img src="/toolbar/media-icon.svg" className="w-3 h-3 sm:w-4 sm:h-4 object-contain" alt="Media" />
                <span className="hidden sm:inline">Insert Media</span>
              </button>
              <button type="button" className="bg-[#EBF0FF] rounded p-1">
                <img src="/toolbar/fullscreen-icon.svg" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" alt="Fullscreen" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="w-full min-h-[160px] rounded-xl border-[3px] sm:border-[4px] border-[#3B4951] bg-[#F6FAFD] overflow-hidden">
              <EditorContent editor={editor} />
            </div>
          </div>
        </>
      )}

      {view === 'preview' && (
        <div className="w-full min-h-[160px] rounded-xl border-[3px] sm:border-[4px] border-[#3B4951] bg-[#F6FAFD] p-4 sm:p-6">
          <div
            className="prose prose-sm sm:prose lg:prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: editor.getHTML() || '<p class="text-[#999]">Nothing to preview yet...</p>' }}
          />
        </div>
      )}

      {/* Character counter - always anchored bottom-right */}
      <div className="text-right text-[12px] sm:text-[14px] text-[#4A4A4A]">
        {charCount} Characters
      </div>

      <InsertMediaModal
        isOpen={mediaModalOpen}
        onClose={() => setMediaModalOpen(false)}
        onInsert={handleMediaInsert}
      />
    </div>
  );
}
