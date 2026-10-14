# 专家对话模块重构说明

## 重构目标

1. **清理重复代码**：将分散在多个文件中的重复逻辑提取到 hooks 和通用组件中
2. **细粒度拆分**：将大型组件拆分为更小的、职责单一的组件
3. **提高可维护性**：通过清晰的目录结构和语义化命名，让代码更易理解和维护
4. **保持功能不变**：所有原有功能和设计样式都保持不变

## 目录结构

```
expert-chat/
├── hooks/                          # 自定义 Hooks
│   ├── useContactActions.ts        # 联系人操作逻辑（电话、视频、短信等）
│   └── useChatLogic.ts             # 对话核心逻辑（消息发送、文件上传等）
├── common/                          # 专家对话相关组件（完整重构）
│   ├── ChatHeader.tsx                    # 对话头部（姓名、专业、电话、公司等信息）
│   ├── ChatMessages.tsx                  # 消息区域（一问一答展示）
│   ├── ChatQuickActions.tsx              # 快捷操作按钮（语音、视频通话）
│   ├── ChatInput.tsx                     # 输入框（含快捷短语）
│   ├── FriendsList.tsx                   # 会话好友列表（从 common 移入）
│   ├── OnlineChatList.tsx          # 在线对话列表（从 common 移入）
│   ├── ChatDetailPage.tsx          # 对话详情页（从 common 移入）
│   └── ContactList.tsx             # 联系人列表（从 common 移入）
├── containers/                      # 容器组件
│   ├── ChatContainer.tsx            # 对话容器（组装头部+消息+快捷操作+输入框）
│   └── ContactsChatSidebar.tsx      # 列表容器（在线对话+通讯录切换）
├── DesktopChatPage.tsx             # 桌面版页面（左右分屏布局）
├── MobileChatTab.tsx               # 移动版标签页（弹窗模式）
├── index.ts                        # 模块导出文件
└── ChatREADME.md                   # 重构说明文档
```

## 组件说明

### Hooks

#### `useContactActions`

封装所有联系人操作相关的逻辑：

- 电话拨打
- 语音通话
- 视频通话
- 短信发送
- Contact 和 ExpertFriend 类型转换

#### `useChatLogic`

封装对话核心逻辑：

- 消息发送
- 文件上传
- 消息回复
- 时间格式化
- 消息列表管理

### 通用组件

#### `ChatHeader`

对话头部组件，显示：

- 专家头像和在线状态
- 姓名、专业、电话、公司信息
- 电话、短信快捷按钮
- 返回按钮（可选）

#### `ChatMessages`

消息区域组件：

- 消息列表展示
- 引用消息渲染
- 滚动管理

#### `ChatQuickActions`

快捷操作按钮组件：

- 语音通话按钮
- 视频通话按钮
- 支持绝对定位和相对定位两种模式

#### `ChatInput`

输入框组件：

- 文本输入
- 文件上传
- 引用回复
- 快捷短语（通过 ChatInputBox 实现）

#### `FriendsList`

专家好友列表组件（从 common 移入）：

- 专家在线列表展示
- 支持 list 和 card 两种展示模式
- 搜索功能
- 在线状态显示

#### `OnlineChatList`

在线对话列表组件（从 common 移入）：

- 专家在线对话和通讯录切换
- 支持分屏和单屏模式
- 集成 FriendsList 和 ContactList

#### `ChatDetailPage`

对话详情页组件（从 common 移入）：

- 完整的对话详情页面
- 包含头部、消息区、输入框
- 支持子标签页切换

### 容器组件

#### `ChatContainer`

对话容器组件，组装：

- ChatHeader（头部）
- ChatMessages（消息区）
- ChatQuickActions（快捷操作）
- ChatInput（输入框）

负责处理对话相关的状态管理和业务逻辑。

#### `ListContainer`

列表容器组件，组装：

- 子标签页切换（在线对话/通讯录）- 可选显示（通过 `showTabs` prop 控制）
- FriendsList 或 ContactList（直接使用真实组件）

负责处理列表展示和切换逻辑。支持在不同场景下显示或隐藏标签页切换。

### 页面组件

#### `DesktopChatPage`（大屏版）

桌面版专家对话页面：

- **标签页在顶部**：在线对话/通讯录切换位于页面顶部
- 左右分屏布局：左侧列表 + 右侧对话详情
- 左侧：ListContainer（列表，不显示标签页）
- 右侧：ChatContainer（对话详情）
- 通讯录模式全屏显示

#### `MobileChatTab`（小屏版）

移动版专家对话标签页：

- 使用 ListContainer 显示列表（显示标签页切换）
- 使用自定义弹窗 + ChatContainer 显示对话详情
- **弹窗头部和输入框固定**：消息区域滚动，头部和输入框保持固定
- 弹窗模式，不需要子标签页联动

## 代码映射关系

| 旧组件 | 新组件 | 说明 |
| --- | --- | --- |
| `ExpertChatPage.tsx` | `DesktopChatPage.tsx` | 大屏版主页面 |
| `ExpertChatTab.tsx` | `MobileChatTab.tsx` | 小屏版标签页 |
| `ChatDetailPage.tsx` | `ChatContainer.tsx` + 各细粒度组件 | 对话详情拆分为多个组件 |
| `ChatDetailModal.tsx` | `SidebarModal` + `ChatContainer.tsx` | 弹窗使用容器组件 |
| `OnlineChatList.tsx` | `expert-chat/common/OnlineChatList.tsx` | 直接移入 expert-chat 模块 |
| `FriendsList.tsx` | `expert-chat/common/FriendsList.tsx` | 直接移入 expert-chat 模块 |

## 使用方式

### 大屏版使用

```tsx
import DesktopChatPage from './components/chat/expert-chat/desktop/DesktopChatPage';

// 在路由中使用
<Route path="/assistant/expert-chat" element={<DesktopChatPage />} />;
```

### 小屏版使用

```tsx
import MobileChatTab from './components/chat/expert-chat/mobile/MobileChatTab';

// 在侧边栏中使用
<MobileChatTab />;
```

### 单独使用组件

```tsx
import {
  ChatContainer,
  ListContainer,
  FriendsList,
  OnlineChatList,
  ChatDetailPage,
  useContactActions,
  useChatLogic,
} from './components/chat/expert-chat';

// 可以灵活组合使用这些组件
```

## 重构优势

1. **代码复用率提高**：通用组件和 hooks 可在多处复用
2. **职责更清晰**：每个组件只负责一个具体功能
3. **易于测试**：细粒度组件更容易编写单元测试
4. **易于维护**：清晰的目录结构和语义化命名
5. **易于扩展**：新增功能时可以选择性修改特定组件

## 重要更新

### v1.1 布局优化（2024）

1. **大屏版标签页提升到顶部**
   - 在线对话/通讯录切换现在位于页面顶部
   - 左侧列表面板不再显示标签页切换

- 通过 `ListContainer` 的 `showTabs={false}` 控制

2. **小屏版固定头部和输入框**
   - 弹窗中的头部信息保持固定
   - 输入框固定在底部
   - 消息区域可独立滚动
   - 使用自定义弹窗替代 SidebarModal

## 清理记录

### v1.0 初始重构（2024）

经用户测试确认新版本满足预期后，已删除以下旧文件：

- ✅ `ExpertChatPage.tsx` - 已被 `DesktopChatPage.tsx` 替代
- ✅ `ExpertChatTab.tsx` - 已被 `MobileChatTab.tsx` 替代
- ✅ `ChatDetailModal.tsx` - 已被自定义弹窗替代

### v1.2 完整重构（2024）

根据用户反馈，将所有专家对话相关组件完整移入 expert-chat 模块：

**从 common 移入的组件：**

- ✅ `FriendsList.tsx` - 会话好友列表
- ✅ `OnlineChatList.tsx` - 在线对话列表
- ✅ `ChatDetailPage.tsx` - 对话详情页
- ✅ `ContactList.tsx` - 联系人列表

**删除的包装器组件：**

- ✅ `ExpertOnlineList.tsx` - 包装器，已删除，直接使用 FriendsList
- ✅ `ExpertContactList.tsx` - 包装器，已删除，直接使用 ContactList

**保留在 common 的通用组件：**

- `ChatMessageList.tsx` - 真正通用的消息列表（AI 对话也用）
- `ChatInputBox.tsx` - 真正通用的输入框（AI 对话也用）

**更新的引用：**

- ✅ `ContactsChatSidebar.tsx` - 直接使用真实组件替代包装器
- ✅ `MessageAssistant.tsx` - 更新为使用 expert-chat 模块组件
- ✅ `XiaoAnAssistant.tsx` - 更新为使用 expert-chat 模块组件
- ✅ `ChatSidebar.tsx` - 更新为使用 expert-chat 模块组件
- ✅ `SupervisoryWorkspace` 模块 - 更新为使用 expert-chat/common/ContactList

## 注意事项

1. 所有旧代码已清理完成
2. 新版本经测试确认满足预期
3. 所有样式和交互保持不变
4. 代码结构更清晰，便于后期维护
