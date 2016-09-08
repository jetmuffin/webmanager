## A Successful Git Branching Model

[A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/)
一文主要介绍了如下图所示的一种git branching模型。

![branching model](assets/git-model@2x.png)

在上图中：

  1. 只有两个长期存在的分支: master 和 develop
  2. master 分支上不做任何提交，唯一的操作是 merge 和打 tag，master
  分支在这里作为稳定版本分支
  3. 每次发布新版本之前，也就是打 tag 之前，应该基于 master 分支做一遍集成测试
  4. develop 分支是日常开发分支，从最开始到第一个版本发布，develop 和 master
  都是一样的，也就是一个分支，只有当第一个版本发布时，master 和 develop
  才变成两个分支
  5. 这里有一些辅助分支：
    - hotfixes 分支，主要用来跟踪 hotfix，当发现 master 上有 bug 需要 fix 时，
    临时 checkout 一个 hotfixes 分支，然后开发补丁，最后 merge 到 master branch，
    发布新版本，hotfixes 分支作为一个临时分支，存在的主要理由是使用
    'merge --no-ff' 来 merge 到 master 后，会强制生成 merge 结点，
    比直接在 master 分支上打 patch 更明显，起到标记的作用，hotfixes 分支在 merge
    之后即被删除
    - release 分支，checkout 自 develop 分支，当开发到一定程度，适合发布新版本的时候，
    checkout 一个 release 分支出来，然后在这个分支进行完善的单元测试，集成测试，
    修补 bug，只有 bugfix 才能进入 release 分支，当发布准备完成后，merge 到 master 分支，
    打一个 tag, （需要继续测试，master 上可能有 hotfix），完成新版本发布
    - feature 分支，feature 分支顾名思义是用来开发某个特定 feature 的，从 develop 分支
    checkout 出来，每个 feature 都有自己的分支，当 feature 开发完成后，merge 到
    develop 分支，这期间 develop 分支继续开发

这个模型可以适合大部分中小型项目的开发，主要的不足是：

  - 不能维护旧的稳定版本，上述模型中永远都只有一个master branch用来指向最新的稳定版本，
  旧的稳定版本得不到维护；例如：当0.2发布后，0.1就不再维护了
  - bugfix 需要使用临时的 hotfix branch，因为这个模型采用的是 bugfix 从稳定分支到开发分支，
  Linux Kernel 则采用从开发 tree 到 stable tree 的流程，这个不足可以很简单通过让 commit
  先进入 develop 分支，然后 cherry-pick 到 master 分支来改进

## 本项目的分支模型

本项目的分支模型在上述的 Git Branch Model 的基础上修改，主要包括下面几个内容：

1. 省略 feature 分支；bugfix 通过 develop 分支进入 master 分支
2. develop 分支作为日常开发分支
3. master 分支提供最新的发布版本，保证每时每刻的 master 分支是稳定无 bug 的
4. 发布版本时，从 master 分支 checkout 出一个临时的 release 分支，进行完善的测试和 bugfix。当 release 分支足够稳定时发布新版本，打 tag
5. ci 分支单独控制项目的持续集成，readme 分支单独控制项目的文档

## Git 使用规范

1. 开发前须将代码 fork 到自己的仓库，然后将 `upsteam` 设为本仓库
2. commits 通过 Pull Request 进入 develop 分支。一个 PR 可以包括多个 commit，每个 commit 尽量保证单一的功能，并且命名上要规范，显示了这个 commit 完成了哪些内容。
3. 每个 PR 需要通过 CI(continuous integration) 的测试，通过后我会进行审核和 code review，通过才允许进入 develop 分支