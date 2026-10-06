/**
 * Helper to convert Markdown strings into clean, semantic HTML with Tailwind styling.
 */
export function renderMarkdown(md: string): string {
  // Normalize line endings
  let text = md.trim().replace(/\r\n/g, '\n');

  // Split lines
  const lines = text.split('\n');
  const output: string[] = [];
  let inList = false;
  let inTable = false;
  let tableHeaderParsed = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Blank line
    if (!line.trim()) {
      if (inList) {
        output.push('</ul>');
        inList = false;
      }
      if (inTable) {
        output.push('</tbody></table></div>');
        inTable = false;
        tableHeaderParsed = false;
      }
      continue;
    }

    // Horizontal Rule
    if (/^---$/.test(line.trim())) {
      if (inList) { output.push('</ul>'); inList = false; }
      output.push('<hr class="my-8 border-slate-800" />');
      continue;
    }

    // Headings
    if (line.startsWith('#### ')) {
      if (inList) { output.push('</ul>'); inList = false; }
      const content = parseInline(line.slice(5));
      output.push(`<h4 class="text-base font-bold text-white mt-6 mb-2 tracking-tight">${content}</h4>`);
      continue;
    }
    if (line.startsWith('### ')) {
      if (inList) { output.push('</ul>'); inList = false; }
      const content = parseInline(line.slice(4));
      output.push(`<h3 class="text-xl sm:text-2xl font-bold text-white mt-8 mb-3 tracking-tight">${content}</h3>`);
      continue;
    }
    if (line.startsWith('## ')) {
      if (inList) { output.push('</ul>'); inList = false; }
      const content = parseInline(line.slice(3));
      output.push(`<h2 class="text-2xl sm:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-2">${content}</h2>`);
      continue;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      if (inList) { output.push('</ul>'); inList = false; }
      const content = parseInline(line.slice(2));
      output.push(`<blockquote class="my-5 p-4 rounded-xl bg-cyan-950/30 border-l-4 border-cyan-400 text-slate-200 text-sm leading-relaxed">${content}</blockquote>`);
      continue;
    }

    // Unordered List (- item or * item)
    if (line.startsWith('- ') || line.startsWith('* ')) {
      if (!inList) {
        output.push('<ul class="my-4 space-y-2 text-slate-300 text-sm sm:text-base leading-relaxed pl-5 list-disc marker:text-cyan-400">');
        inList = true;
      }
      const content = parseInline(line.slice(2));
      output.push(`<li>${content}</li>`);
      continue;
    }

    // Numbered List (1. item)
    const numMatch = line.match(/^(\d+)\.\s+(.*)/);
    if (numMatch) {
      if (inList) { output.push('</ul>'); inList = false; }
      const content = parseInline(numMatch[2]);
      output.push(`<div class="flex items-start gap-3 my-2 text-slate-300 text-sm sm:text-base leading-relaxed"><span class="shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold flex items-center justify-center mt-0.5">${numMatch[1]}</span><div class="flex-1">${content}</div></div>`);
      continue;
    }

    // Table row
    if (line.startsWith('|') && line.endsWith('|')) {
      if (inList) { output.push('</ul>'); inList = false; }
      const cells = line.split('|').slice(1, -1).map(c => c.trim());
      
      // Separator row (e.g. |:---|:---|)
      if (cells.every(c => /^:?-+:?$/.test(c))) {
        tableHeaderParsed = true;
        continue;
      }

      if (!inTable) {
        inTable = true;
        tableHeaderParsed = false;
        output.push('<div class="my-6 overflow-x-auto rounded-xl border border-slate-800"><table class="w-full text-left text-xs sm:text-sm text-slate-300">');
      }

      if (!tableHeaderParsed) {
        output.push('<thead class="bg-slate-900 text-white font-semibold border-b border-slate-800"><tr>');
        cells.forEach(c => output.push(`<th class="px-4 py-3">${parseInline(c)}</th>`));
        output.push('</tr></thead><tbody>');
      } else {
        output.push('<tr class="border-b border-slate-800/60 hover:bg-slate-900/40">');
        cells.forEach(c => output.push(`<td class="px-4 py-3">${parseInline(c)}</td>`));
        output.push('</tr>');
      }
      continue;
    }

    // End open list / table if not matched
    if (inList) { output.push('</ul>'); inList = false; }
    if (inTable) { output.push('</tbody></table></div>'); inTable = false; tableHeaderParsed = false; }

    // Paragraph
    output.push(`<p class="my-4 text-slate-300 text-sm sm:text-base leading-relaxed">${parseInline(line)}</p>`);
  }

  if (inList) output.push('</ul>');
  if (inTable) output.push('</tbody></table></div>');

  return output.join('\n');
}

function parseInline(str: string): string {
  return str
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em class="italic text-slate-200">$1</em>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono text-xs border border-slate-700/80">$1</code>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 font-medium transition-colors" target="_blank" rel="noopener noreferrer">$1</a>');
}
