// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="index.html">机器学习系统：设计和实现</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_preface/index.html">前言</a></span></li><li class="chapter-item expanded "><li class="part-title">基础篇</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_introduction/index.html"><strong aria-hidden="true">1.</strong> 导论</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_introduction/applications.html"><strong aria-hidden="true">1.1.</strong> 机器学习应用</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_introduction/design.html"><strong aria-hidden="true">1.2.</strong> 机器学习框架的设计目标</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_introduction/architecture.html"><strong aria-hidden="true">1.3.</strong> 机器学习框架的基本组成原理</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_introduction/ecosystem.html"><strong aria-hidden="true">1.4.</strong> 机器学习系统生态</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_introduction/readers.html"><strong aria-hidden="true">1.5.</strong> 图书结构和读者</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_programming_interface/index.html"><strong aria-hidden="true">2.</strong> 编程接口</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_programming_interface/development_history.html"><strong aria-hidden="true">2.1.</strong> 机器学习系统编程模型的演进</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_programming_interface/ml_workflow.html"><strong aria-hidden="true">2.2.</strong> 机器学习工作流</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_programming_interface/neural_network_layer.html"><strong aria-hidden="true">2.3.</strong> 定义深度神经网络</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_programming_interface/c_python_interaction.html"><strong aria-hidden="true">2.4.</strong> C/C++编程接口</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_programming_interface/ml_programming_paradigm.html"><strong aria-hidden="true">2.5.</strong> 机器学习框架的编程范式</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_programming_interface/summary.html"><strong aria-hidden="true">2.6.</strong> 总结</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_computational_graph/index.html"><strong aria-hidden="true">3.</strong> 计算图</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_computational_graph/background_and_functionality.html"><strong aria-hidden="true">3.1.</strong> 计算图的设计背景和作用</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_computational_graph/components_of_computational_graph.html"><strong aria-hidden="true">3.2.</strong> 计算图的基本构成</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_computational_graph/generation_of_computational_graph.html"><strong aria-hidden="true">3.3.</strong> 计算图的生成</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_computational_graph/schedule_of_computational_graph.html"><strong aria-hidden="true">3.4.</strong> 计算图的调度</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_computational_graph/summary.html"><strong aria-hidden="true">3.5.</strong> 总结</a></span></li></ol><li class="chapter-item expanded "><li class="part-title">进阶篇</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_preface_advanced/index.html"><strong aria-hidden="true">4.</strong> 导读</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_frontend_and_ir/index.html"><strong aria-hidden="true">5.</strong> AI编译器和前端技术</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_frontend_and_ir/ai_compiler_design_principle.html"><strong aria-hidden="true">5.1.</strong> AI编译器设计原理</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_frontend_and_ir/overview_of_frontend.html"><strong aria-hidden="true">5.2.</strong> AI编译器前端技术概述</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_frontend_and_ir/intermediate_representation.html"><strong aria-hidden="true">5.3.</strong> 中间表示</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_frontend_and_ir/ad.html"><strong aria-hidden="true">5.4.</strong> 自动微分</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_frontend_and_ir/type_system_and_static_analysis.html"><strong aria-hidden="true">5.5.</strong> 类型系统和静态分析</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_frontend_and_ir/common_frontend_optimization_pass.html"><strong aria-hidden="true">5.6.</strong> 常见前端编译优化方法</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_frontend_and_ir/summary.html"><strong aria-hidden="true">5.7.</strong> 总结</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_backend_and_runtime/index.html"><strong aria-hidden="true">6.</strong> 编译器后端和运行时</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_backend_and_runtime/overview.html"><strong aria-hidden="true">6.1.</strong> 概述</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_backend_and_runtime/graph_optimizer.html"><strong aria-hidden="true">6.2.</strong> 计算图优化</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_backend_and_runtime/kernel_selecter.html"><strong aria-hidden="true">6.3.</strong> 算子选择</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_backend_and_runtime/memory_allocator.html"><strong aria-hidden="true">6.4.</strong> 内存分配</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_backend_and_runtime/compute_schedule_and_execute.html"><strong aria-hidden="true">6.5.</strong> 计算调度与执行</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_backend_and_runtime/op_compiler.html"><strong aria-hidden="true">6.6.</strong> 算子编译器</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_backend_and_runtime/summary.html"><strong aria-hidden="true">6.7.</strong> 总结</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_accelerator/index.html"><strong aria-hidden="true">7.</strong> 硬件加速器</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_accelerator/accelerator_introduction.html"><strong aria-hidden="true">7.1.</strong> 概述</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_accelerator/accelerator_architecture.html"><strong aria-hidden="true">7.2.</strong> 加速器基本组成原理</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_accelerator/accelerator_programming.html"><strong aria-hidden="true">7.3.</strong> 加速器基本编程原理</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_accelerator/accelerator_practise.html"><strong aria-hidden="true">7.4.</strong> 加速器实践</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_accelerator/summary.html"><strong aria-hidden="true">7.5.</strong> 总结</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_data_processing/index.html"><strong aria-hidden="true">8.</strong> 数据处理框架</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_data_processing/requirements.html"><strong aria-hidden="true">8.1.</strong> 概述</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_data_processing/program_model.html"><strong aria-hidden="true">8.2.</strong> 易用性设计</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_data_processing/performance.html"><strong aria-hidden="true">8.3.</strong> 高效性设计</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_data_processing/data_order.html"><strong aria-hidden="true">8.4.</strong> 保序性设计</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_data_processing/extension.html"><strong aria-hidden="true">8.5.</strong> 单机数据处理性能的扩展</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_data_processing/summary.html"><strong aria-hidden="true">8.6.</strong> 总结</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_model_deployment/index.html"><strong aria-hidden="true">9.</strong> 模型部署</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_model_deployment/model_deployment_introduction.html"><strong aria-hidden="true">9.1.</strong> 概述</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_model_deployment/model_converter_and_optimizer.html"><strong aria-hidden="true">9.2.</strong> 训练模型到推理模型的转换及优化</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_model_deployment/model_compression.html"><strong aria-hidden="true">9.3.</strong> 模型压缩</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_model_deployment/model_inference.html"><strong aria-hidden="true">9.4.</strong> 模型推理</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_model_deployment/model_security.html"><strong aria-hidden="true">9.5.</strong> 模型的安全保护</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_model_deployment/summary.html"><strong aria-hidden="true">9.6.</strong> 总结</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_distributed_training/index.html"><strong aria-hidden="true">10.</strong> 分布式训练</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_distributed_training/overview.html"><strong aria-hidden="true">10.1.</strong> 系统概述</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_distributed_training/methods.html"><strong aria-hidden="true">10.2.</strong> 实现方法</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_distributed_training/cluster.html"><strong aria-hidden="true">10.3.</strong> 机器学习集群架构</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_distributed_training/collective.html"><strong aria-hidden="true">10.4.</strong> 集合通信</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_distributed_training/parameter_servers.html"><strong aria-hidden="true">10.5.</strong> 参数服务器</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_distributed_training/summary.html"><strong aria-hidden="true">10.6.</strong> 总结</a></span></li></ol><li class="chapter-item expanded "><li class="part-title">拓展篇</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_preface_extension/index.html"><strong aria-hidden="true">11.</strong> 导读</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_recommender_system/index.html"><strong aria-hidden="true">12.</strong> 深度学习推荐系统</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_recommender_system/system_architecture.html"><strong aria-hidden="true">12.1.</strong> 系统基本组成</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_recommender_system/multi_stage_recommender_system.html"><strong aria-hidden="true">12.2.</strong> 多阶段推荐系统</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_recommender_system/model_update.html"><strong aria-hidden="true">12.3.</strong> 模型更新</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_recommender_system/case_study.html"><strong aria-hidden="true">12.4.</strong> 案例分析：支持在线模型更新的大型推荐系统</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_recommender_system/summary.html"><strong aria-hidden="true">12.5.</strong> 小结</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_federated_learning/index.html"><strong aria-hidden="true">13.</strong> 联邦学习系统</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_federated_learning/overview.html"><strong aria-hidden="true">13.1.</strong> 概述</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_federated_learning/horizontal_fl.html"><strong aria-hidden="true">13.2.</strong> 横向联邦学习</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_federated_learning/vertical_fl.html"><strong aria-hidden="true">13.3.</strong> 纵向联邦学习</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_federated_learning/privacy_encryption_algorithm.html"><strong aria-hidden="true">13.4.</strong> 隐私加密算法</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_federated_learning/outlook.html"><strong aria-hidden="true">13.5.</strong> 展望</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_federated_learning/summary.html"><strong aria-hidden="true">13.6.</strong> 小结</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_reinforcement_learning/index.html"><strong aria-hidden="true">14.</strong> 强化学习系统</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_reinforcement_learning/rl_introduction.html"><strong aria-hidden="true">14.1.</strong> 强化学习介绍</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_reinforcement_learning/single_node_rl.html"><strong aria-hidden="true">14.2.</strong> 单节点强化学习系统</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_reinforcement_learning/marl.html"><strong aria-hidden="true">14.3.</strong> 多智能体强化学习</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_reinforcement_learning/marl_sys.html"><strong aria-hidden="true">14.4.</strong> 多智能体强化学习系统</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_reinforcement_learning/summary.html"><strong aria-hidden="true">14.5.</strong> 小结</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_explainable_AI/index.html"><strong aria-hidden="true">15.</strong> 可解释性AI系统</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_explainable_AI/explainable_ai.html"><strong aria-hidden="true">15.1.</strong> 背景</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_rl_sys/index.html"><strong aria-hidden="true">16.</strong> 机器人系统</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_rl_sys/rl_sys_intro.html"><strong aria-hidden="true">16.1.</strong> 机器人系统概述</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_rl_sys/ros.html"><strong aria-hidden="true">16.2.</strong> 通用机器人操作系统</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_rl_sys/ros_code_ex.html"><strong aria-hidden="true">16.3.</strong> 案例分析：使用机器人操作系统</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter_rl_sys/summary.html"><strong aria-hidden="true">16.4.</strong> 总结</a></span></li></ol><li class="chapter-item expanded "><li class="part-title">附录</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="appendix_machine_learning_introduction/index.html"><strong aria-hidden="true">17.</strong> 机器学习介绍</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="appendix_machine_learning_introduction/neural_network.html"><strong aria-hidden="true">17.1.</strong> 神经网络</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="appendix_machine_learning_introduction/gradient_descent.html"><strong aria-hidden="true">17.2.</strong> 梯度下降与反向传播</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="appendix_machine_learning_introduction/classic_machine_learning.html"><strong aria-hidden="true">17.3.</strong> 经典机器学习方法</a></span></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

