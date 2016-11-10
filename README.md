#lib.flexible

移动端自适应方案，相关文章请参考[此处](https://github.com/amfe/article/issues/17)

## Update【2016年01月13日】


ME直播flexible方案临时升级如下：

- 针对OS 9_3的UA，做临时处理，强制`dpr`为`1`，即`scale`也为`1`，虽然牺牲了这些版本上的高清方案，但是也只能这么处理了
- 手动复制代码内联到`html`中，具体代码可以[点击这里下载](https://github.com/kiros1986/flexible/edit/master/build/flexible.min.js)

## 最新版本

**0.3.2**

## 用Grunt打包

运行 `npm install`，来安装所需的依赖模块。关于NPM的知识，请参见[nodejs](http://nodejs.org/);

运行 `grunt`，来对项目进行打包。关于Grunt的知识，请参见[gruntjs](http://gruntjs.com/);

## 依赖库

无

完整引用举例：

    <script src="http://g.tbcdn.cn/mtb/lib-flexible/{{version}}/??flexible_css.js,flexible.js"></script>

## 使用方法

建议对于js做`内联处理`，在**所有资源加载之前**执行这个js。

执行这个js后，会在`html`（也就是document.documentElement）上增加一个`data-dpr`属性，以及`font-size`样式。

之后页面中的元素，都可以用rem单位来设置。`html`上的`font-size`就是rem的基准像素。

## 把视觉稿中的px转换成rem

首先，目前视觉稿大小分为`640`，`750`以及，`1125`这三种。

1rem单位认定为10a。拿750的视觉稿举例：


    1rem =100px

因此，对于视觉稿上的元素的尺寸换算，只需要`原始px值`除以`rem基准px值`即可。例如240px * 120px的元素，最后转换为3.2rem * 1.6rem。

## 字体不使用rem的方法

字体的大小不推荐用rem作为单位。所以对于字体的设置，仍旧使用px作为单位，并配合用`data-dpr`属性来区分不同dpr下的的大小。

例如：

    div {
        width: 1rem; 
        height: 0.4rem;
        font-size: 12px; // 默认写上dpr为1的fontSize
    }
    
    [data-dpr="2"] div {
        font-size: 24px;
    }

    [data-dpr="3"] div {
        font-size: 36px;
    }

### 手动配置

引入执行js之前，可以通过输出meta标签方式来设置pc端最大宽度，默认为540相随：

     <meta name="flexible" content="max-width-PC=600,design-width=750" />



### 手动设置rem基准值的方法

输出如下css样式即可：

    html {font-size: 60px!important;}

### 一些常用APIs

**[Number] lib.flexible.dpr**

当前页面的dpr值

**[Number] lib.flexible.rem** 

当前页面的rem基准值

**[Number|String] lib.flexible.rem2px([Number|String digital])**

把rem转换为px

**[Number|String] lib.flexible.px2rem([Number|String digital])** 

把px转换为rem

**lib.flexible.refreshRem()** 

刷新当前页面的rem基准值

