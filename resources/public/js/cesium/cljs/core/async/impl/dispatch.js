// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.core.async.impl.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('goog.async.nextTick');
cljs.core.async.impl.dispatch.tasks = cljs.core.async.impl.buffers.ring_buffer.call(null,(32));
cljs.core.async.impl.dispatch.running_QMARK_ = false;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
cljs.core.async.impl.dispatch.TASK_BATCH_SIZE = (1024);
cljs.core.async.impl.dispatch.process_messages = (function cljs$core$async$impl$dispatch$process_messages(){
(cljs.core.async.impl.dispatch.running_QMARK_ = true);

(cljs.core.async.impl.dispatch.queued_QMARK_ = false);

var count_8152 = (0);
while(true){
var m_8153 = cljs.core.async.impl.dispatch.tasks.pop();
if((m_8153 == null)){
} else {
m_8153.call(null);

if((count_8152 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE)){
var G__8154 = (count_8152 + (1));
count_8152 = G__8154;
continue;
} else {
}
}
break;
}

(cljs.core.async.impl.dispatch.running_QMARK_ = false);

if((cljs.core.async.impl.dispatch.tasks.length > (0))){
return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
} else {
return null;
}
});
cljs.core.async.impl.dispatch.queue_dispatcher = (function cljs$core$async$impl$dispatch$queue_dispatcher(){
if(((cljs.core.async.impl.dispatch.queued_QMARK_) && (cljs.core.async.impl.dispatch.running_QMARK_))){
return null;
} else {
(cljs.core.async.impl.dispatch.queued_QMARK_ = true);

return goog.async.nextTick(cljs.core.async.impl.dispatch.process_messages);
}
});
cljs.core.async.impl.dispatch.run = (function cljs$core$async$impl$dispatch$run(f){
cljs.core.async.impl.dispatch.tasks.unbounded_unshift(f);

return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
});
cljs.core.async.impl.dispatch.queue_delay = (function cljs$core$async$impl$dispatch$queue_delay(f,delay){
return setTimeout(f,delay);
});

//# sourceMappingURL=dispatch.js.map
