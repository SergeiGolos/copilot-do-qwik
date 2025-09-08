import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div class="absolute inset-0">
        <div class="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div class="absolute top-1/4 right-20 w-16 h-16 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
        <div class="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-600 rounded-full opacity-25 animate-pulse"></div>
        <div class="absolute bottom-1/3 right-10 w-12 h-12 bg-pink-500 rounded-full opacity-20 animate-bounce"></div>
      </div>

      <div class="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div class="max-w-2xl w-full">
          {/* Main content */}
          <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 text-center border border-white/20">
            <h1 class="text-5xl font-bold text-white mb-4 drop-shadow-lg">
              🧭 Spec‑based Development with .blackboard
            </h1>
            <p class="text-xl text-white/90 mb-8 leading-relaxed">
              This app uses a spec‑first workflow powered by a .blackboard folder to design, plan, code, and validate features with task‑based agents.
            </p>

            {/* Getting Started Section */}            
              <h2 class="text-2xl text-white font-bold mb-6 text-center">🚀 Getting Started</h2>

              {/* Bootstrap Agent - Full Width */}
              <div class="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10 mb-6">
                <div class="flex items-start gap-6">
                  <div class="text-5xl flex-shrink-0">🏗️</div>
                  <div class="flex-1 text-left">
                    <h3 class="text-white font-bold text-xl mb-2">Bootstrap Agent</h3>
                    <p class="text-white/80 text-sm">                  
                      Complete .ground/ foundation with product vision, architecture, coding standards, and domain knowledge -
                      establishing shared Long-Term Memory (LTM) and reducing cognitive load for your entire team.
                    </p>
                  </div>
                </div>
              </div>

              {/* .ground structure */}
              <div class="bg-white/10 rounded-xl p-5 text-left border border-white/10 mb-6">
                <h3 class="text-white font-semibold mb-2">.ground</h3>
                <ul class="list-disc list-inside text-white/80 text-sm space-y-1">
                  <li><span class="font-mono">product.md</span> – vision, users, success metrics</li>
                  <li><span class="font-mono">structure.md</span> – architecture, components, boundaries</li>
                  <li><span class="font-mono">tech.md</span> – stack, tools, frameworks</li>
                  <li><span class="font-mono">coding-standards.md</span> – style, quality guidelines</li>
                  <li><span class="font-mono">naming-conventions.md</span> – consistent naming patterns</li>
                  <li><span class="font-mono">api-conventions.md</span> – API design patterns</li>
                  <li><span class="font-mono">testing-strategy.md</span> – test types, coverage, gates</li>
                  <li><span class="font-mono">knowledge/</span> – domain-specific deep dives</li>
                </ul>
                <p class="text-white/60 text-xs mt-3">Foundational standards and shared project knowledge base.</p>
              </div>

              {/* Getting Started Section */}            
              <h2 class="text-2xl text-white font-bold mb-6 text-center">🎯 Development Workflow</h2>

              {/* Next Steps */}
              <div class="bg-white/5 border border-white/10 rounded-lg p-4">                
                <div class="grid md:grid-cols-4 gap-3 text-xs">
                  <div class="text-center">
                    <div class="text-2xl mb-1">🧭</div>
                    <div class="font-mono text-green-400">design</div>
                    <div class="text-white/60">requirements.md<br />design.md</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl mb-1">📋</div>
                    <div class="font-mono text-blue-400">plan</div>
                    <div class="text-white/60">tasks.md<br />breakdown</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl mb-1">💻</div>
                    <div class="font-mono text-purple-400">write-code</div>
                    <div class="text-white/60">implementation<br />follows .ground/</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl mb-1">🔍</div>
                    <div class="font-mono text-orange-400">review</div>
                    <div class="text-white/60">structured<br />feedback</div>
                  </div>
                </div>
              </div>
                       
            {/* Core flow cards */}
            <div class="grid md:grid-cols-3 gap-6 mb-8 text-left mt-8">
              <div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <div class="text-3xl mb-2">🧱</div>
                <h3 class="text-white font-semibold mb-1">Design</h3>
                <p class="text-white/70 text-sm">Design Agent writes specs: <span class="font-mono">requirements.md</span>, <span class="font-mono">design.md</span>.</p>
              </div>
              <div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <div class="text-3xl mb-2">🧪</div>
                <h3 class="text-white font-semibold mb-1">Design‑Tests</h3>
                <p class="text-white/70 text-sm">Creates <span class="font-mono">testing.md</span> with acceptance criteria and coverage.</p>
              </div>
              <div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <div class="text-3xl mb-2">🗂️</div>
                <h3 class="text-white font-semibold mb-1">Plan</h3>
                <p class="text-white/70 text-sm">Plan Agent breaks work into tasks in <span class="font-mono">tasks.md</span>.</p>
              </div>
            </div>

            {/* Supporting agents */}
            <div class="grid md:grid-cols-3 gap-6 mb-8 text-left">
              <div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <div class="text-3xl mb-2">💻</div>
                <h3 class="text-white font-semibold mb-1">Code</h3>
                <p class="text-white/70 text-sm">Code Agent implements the tasks, updates status, follows <span class="font-mono">.ground/</span> standards.</p>
              </div>
              <div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <div class="text-3xl mb-2">🐞</div>
                <h3 class="text-white font-semibold mb-1">Debug</h3>
                <p class="text-white/70 text-sm">Reproduces, isolates, fixes, and adds regression tests.</p>
              </div>
              <div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <div class="text-3xl mb-2">🔍</div>
                <h3 class="text-white font-semibold mb-1">Review</h3>
                <p class="text-white/70 text-sm">Generates structured code reviews under <span class="font-mono">review/</span>.</p>
              </div>
            </div>

            {/* Utility helpers */}
            <div class="grid md:grid-cols-3 gap-6 mb-8 text-left">
              <div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <div class="text-3xl mb-2">📚</div>
                <h3 class="text-white font-semibold mb-1">Research</h3>
                <p class="text-white/70 text-sm">Deep‑dives, findings, proposals under <span class="font-mono">notes/</span>.</p>
              </div>
              <div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <div class="text-3xl mb-2">🏗️</div>
                <h3 class="text-white font-semibold mb-1">Bootstrap</h3>
                <p class="text-white/70 text-sm">Seeds <span class="font-mono">.ground/</span> product, structure, tech, standards.</p>
              </div>
              <div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <div class="text-3xl mb-2">📝</div>
                <h3 class="text-white font-semibold mb-1">Journal</h3>
                <p class="text-white/70 text-sm">Creates external docs from specs & ground.</p>
              </div>
            </div>        

            {/* .blackboard structure */}
            <div class="bg-white/10 rounded-xl p-5 text-left border border-white/10 mb-6">
              <h3 class="text-white font-semibold mb-2">.blackboard</h3>
              <ul class="list-disc list-inside text-white/80 text-sm space-y-1">
                <li><span class="font-mono">specs/&lt;feature-or-ticket&gt;/requirements.md</span> – goals & acceptance criteria</li>
                <li><span class="font-mono">specs/&lt;feature-or-ticket&gt;/design.md</span> – plan & architecture</li>
                <li><span class="font-mono">specs/&lt;feature-or-ticket&gt;/testing.md</span> – test strategy</li>
                <li><span class="font-mono">specs/&lt;feature-or-ticket&gt;/tasks.md</span> – ordered, atomic tasks</li>
                <li><span class="font-mono">notes/</span> – working memory and research</li>
                <li><span class="font-mono">review/</span> – structured code reviews</li>
              </ul>
              <p class="text-white/60 text-xs mt-3">Dynamic project context and feature-specific documentation.</p>
            </div>           

            <div class="mt-8 pt-6 border-t border-white/20">
              <p class="text-white/60">© 2025 .blackboard Workflow. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Corner Sticker - Clone Template */}
      <a
        href="https://github.com/SergeiGolos/copilot-do-qwik"
        target="_blank"
        rel="noopener noreferrer"
        class="fixed top-4 right-4 bg-yellow-400 text-black px-3 py-2 rounded-lg shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300 z-20 font-semibold text-sm flex items-center gap-1"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
        Clone Template
      </a>
    </div>
  );
});

export const head: DocumentHead = {
  title: ".blackboard Spec Workflow",
  meta: [
    {
      name: "description",
      content: "Spec-first development using a .blackboard workflow with task-based agents for design, plan, code, test, debug, and review.",
    },
  ],
};
