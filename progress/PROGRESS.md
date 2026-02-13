# Progress state – React Jr interview readiness

**Last updated:** 2025-02-02  
**Current bar:** ~40% (see scale below)

---

## Progress bar (0% = starting, 100% = applying)

```
  0%                                                                         100%
  |----------------------------------------------------------------------------|
  |████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░|
  |                                                                      APPLY
  |  ^
  |  current (~40%)
```

**What the bar is based on:** Projects built, whether core patterns (handlers, closures, filter/map, state) are done right without hints, and ability to explain them. Kept strict on purpose.

---

## Level summary (current)

- **Can do:** Build a small React + TS app (state, components, forms, list CRUD). Use BEM, flex/CSS, TypeScript. Fix things when mistakes are pointed out.
- **Not yet automatic:** Passing the right handler (e.g. `onClick` that actually calls the function). Passing id via closure (`() => handleDone(todo.id)`). Using `filter` to remove vs `map` to update. Functional `setState` to avoid stale closure.
- **Gap:** Under interview pressure, the same mistakes (handler not invoked, filter vs map) would likely show up. Need more reps so these are automatic.

---

## Checklist (interview-ready basics)

- [ ] **Handlers & closures:** Always pass a function that *calls* the handler with the right args (e.g. `onClick={() => handleDone(todo.id)}`). No "pass reference but never call."
- [ ] **Array updates:** Use `map` to change one item (return new object for that item). Use `filter` to remove an item. No "map and return same item in both branches."
- [ ] **setState:** Use functional updates when the next state depends on previous state (e.g. `setTodos(prev => [...prev, newTodo])`) to avoid stale closure.
- [ ] **DOM props:** Use `onClick` (and other standard DOM names) when passing to native elements; keep naming consistent with the platform.
- [ ] **One full project:** Taskify built with add/done/delete, state in one place, types, basic structure. (Done, but with corrections.)
- [ ] **Second project or take-home:** Same level, done without repeating the same handler/closure/filter mistakes. (Not done.)
- [ ] **Explain out loud:** Can explain why we use closure for id, why filter for delete, why functional setState. (Not yet checked.)

---

## Recent notes (what we’ve covered)

| Date       | Topic / event |
|-----------|----------------|
| 2025-02-02 | Taskify: state lift, controlled input, form submit, BEM, two-column layout, absolute centering, backdrop-filter. |
| 2025-02-02 | Mistakes fixed (with guidance): handler not called (`onClick={() => onDone}` → need to call; pass `onClick` with id in closure). Delete used `map` instead of `filter`. |
| 2025-02-02 | List of fixes to apply: IconButton `onClick` prop and usage; TaskHolder pass `onClick={() => handleDone(todo.id)}`; App.css `max-width` typo; `setTodos(prev => ...)` in handleAdd. |
| 2025-02-02 | Progress system created: this folder + README so any chat can read/update progress and keep the bar realistic. |

---

## Next steps (in order)

1. **Apply the Taskify fixes** from the last review (IconButton, TaskHolder, App.css, handleAdd). Confirm done/delete work without help.
2. **Show done tasks on the right column** – filter `todos` by `isDone`, render Undone left / Done right.
3. **Add one more small feature** (e.g. edit task or clear all done) and implement it yourself: correct handler, closure, and array update.
4. **Start a second small project** (same stack). Goal: build it without repeating handler/closure/filter mistakes. After that, consider moving the bar toward 55–65%.

---

## How to update this doc

- **User:** Ask the AI to "update my progress" or "note that I did X" after a session.
- **AI:** Edit only `PROGRESS.md`. Adjust the bar only when there’s real evidence (e.g. second project done cleanly, or same mistake fixed without hints). Add a line to Recent notes with date and short description. Update Next steps when something is done or the focus changes.
